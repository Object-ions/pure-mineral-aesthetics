const Copyrights = () => {
  const footerYear = new Date().getFullYear();
  return (
    <div className="copyrights">
      {footerYear} All Rights Reserved to Pure Minerals Aesthetics
    </div>
  );
};

export default Copyrights;
