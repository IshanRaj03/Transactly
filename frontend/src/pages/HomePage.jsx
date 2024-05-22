import { useNavigate } from "react-router-dom";
import { ButtonHomePage } from "../components/ButtonHomePage";
import image from "../assets/understanding-digital-payments-internal.png";
import Features from "../components/Features";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-home3 h-screen">
      <div className="shadow h-14 flex justify-between bg-secondary text-white border-b-2 border-gray-500">
        <div className="flex flex-col justify-center h-full ml-4 text-2xl font-bold">
          Transactly
        </div>
        <div className="flex mt-1"></div>
      </div>

      <div>
        <div className="flex justify-center items-center mt-10">
          <div className="text-5xl font-bold ">Welcome to Transactly</div>
        </div>
        <div className="grid grid-cols-2 mt-11">
          <div className="flex justify-center items-center mt-10 ml-5">
            <img src={image} alt="PayTM" className="rounded-xl" />
          </div>

          <div className="items-center mt-10 p-10">
            <div className="text-3xl font-bold text-center">
              Send Money Instantly
            </div>
            <div className="mt-10 text-2xl">
              Join our platform to send and receive money with ease. Sign up now
              and start managing your finances effortlessly.
            </div>

            <div className="flex flex-col justify-center items-center mt-12">
              <div className="mb-4">
                <ButtonHomePage
                  label={"Signin"}
                  onClick={() => {
                    navigate("/signin");
                  }}
                />
              </div>

              <div>
                <ButtonHomePage
                  label={"Signup"}
                  onClick={() => {
                    navigate("/signup");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-max">
        <Features></Features>
      </div>
    </div>
  );
};
