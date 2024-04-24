import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../Firebase.config';
import { updateDoc, doc, getDoc } from '@firebase/firestore';
import { toast } from 'react-toastify';

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    number: '',
  });

  const { name, email, number } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      try {
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setFormData((prevState) => ({
            ...prevState,
            number: userSnap.data().number,
          }));
        }
      } catch {}
    };

    fetchUserDetails();
  }, [auth.currentUser]);

  const onLogOut = () => {
    auth.signOut();
    navigate('/');
  };

  const onSubmit = async () => {
    try {
      // Check if the display name has changed
      /*
      Before attempting any updates, the function checks if the user's display name (auth.currentUser.displayName) is different from the name entered in the form (name). 
      */
      if (auth.currentUser.displayName !== name) {
        // Update display name in Fire Base
        /*
        If the name has changed, the function first updates the user's display name in Firebase Authentication. updateProfile is a Firebase Authentication method that updates the profile information of the user. It takes two arguments: the user object (auth.currentUser) and an object with the profile fields you want to update ({ displayName: name })
        */
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      // Update in Fire Store
      /*
        Next, the function updates the user's name in Firestore. To do this, it first creates a reference to the user's document in Firestore using doc. The doc function requires the database instance (db), the collection name ('users'), and the document ID, which is the user's UID (auth.currentUser.uid).

        With this reference (userRef), updateDoc is then used to update the document. updateDoc takes two arguments: the document reference and an object with the fields to update ({ name: name }). This operation is also awaited.
        */

      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        name: name,
        number: number,
      });

      toast.success('Profile updated');

      // Error handling
      /*
    If any errors occur during the try block execution (either in updating the Firebase Authentication profile or the Firestore document), the catch block catches these errors. The catch block pops a message using Toastify
    */
    } catch (error) {
      toast.error('Error updating profile');
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My Profile</p>
          <button className="logOut" type="button" onClick={onLogOut}>
            Log Out
          </button>
        </header>

        <main>
          <div className="profileDetailsHeader">
            <p className="profileDetailsText">Personal Details</p>
            <p
              className="changePersonalDetails"
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? 'done' : 'Click to change'}
            </p>
          </div>

          <div className="profileCard">
            <form>
              <input
                type="text"
                id="name"
                className={!changeDetails ? 'profileName' : 'profileNameActive'}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />

              <input
                type="text"
                id="email"
                className=""
                disabled={true}
                value={email}
                onChange={onChange}
              />

              <input
                type="text"
                id="number"
                className=""
                disabled={!changeDetails}
                value={number}
                onChange={onChange}
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
