import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer*/}
          <Footer className="w-full bg-white mt-10 shadow-inner"/>
    </div>
  );
};

export default Layout;
