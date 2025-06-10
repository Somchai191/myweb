const Footer = () => {
    return (
      <footer className="w-full  bg-black text-white py-4 flex items-center justify-center   bottom-0 left-0 mt-auto">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Somchai Manhoneng
        </p>
      </footer>
    );
  };
  
  export default Footer;