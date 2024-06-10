import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../../firebase/config";

firebase.initializeApp(firebaseConfig);

export default function Login() {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        alert("Sign-in process was canceled. Please try again.");
      } else {
        alert("An error occurred during sign-in. Please try again later.");
      }
    }
  };

  return (
    <div className="loginPage w-full h-screen">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-70">
        <h1 className="text-white text-3xl font-semibold m-2 animate-slideInFromBottom">
          Start building yourself...
        </h1>
        <h1 className="text-white text-xl font-semibold m-2 animate-slideInFromBottom">
          With daily Calisthenics
        </h1>
        <button
          onClick={signInWithGoogle}
          className="bg-[#7070ba] m-16 px-6 py-2 rounded-lg font-medium text-white flex items-center justify-center hover:bg-[#555589] duration-200 animate-slideInFromBottom"
        >
          SignUp with Google{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
            alt="google logo"
            width={"22px"}
            className="ml-3"
          />
        </button>
      </div>
    </div>
  );
}
