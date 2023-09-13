import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
//TODO: connect form to actionforms.io
const Form = ({ name, lName, email, phone, message, send }) => {
  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  var isLoading = false;

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(isLoading);
  }, [isLoading]);

  const onSubmit = (data) => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
        emri: data.emri,
        email: data.email,
        mbiemri: data.mbiemri,
        mesazhi: data.mesazhi,
        tel: data.tel,
      }),
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };
    isLoading = true;
    fetch("https://www.actionforms.io/e/r/asim", requestOptions)
      .then((isLoading = false))
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="relative w-full h-full">
      {isLoaded && (
        <div className="w-full h-full bg-black opacity-10">Në dërgim</div>
      )}
      <div className=" w-full h-full flex px-[14vw]">
        <div className="flex md:flex-row flex-col items-center justify-start h-full w-full  ">
          <div className="w-full z-30 pt-14 px-4">
            <form
              className="flex flex-col z-30 items-center"
              onSubmit={handleSubmit(onSubmit)}
              action="https://www.actionforms.io/e/r/asim"
              method="POST"
            >
              <div className="flex md:flex-row flex-col md:text-paragraphDesktop text-mobParagraph w-full gap-8 md:py-4 py-8">
                <input
                  className="bg-orange-main placeholder-white text-white pl-4 py-2 rounded-xl md:text-paragraphDesktop w-full
                md:font-paragraphDesktop text-mobParagraph md:w-1/2 focus:outline-none focus:bg-[#e99f3d]"
                  type="text"
                  placeholder={name}
                  {...register("emri", { required: true })}
                />
                <input
                  className="bg-orange-main placeholder-white text-white pl-4 py-2 rounded-xl md:w-1/2 w-full md:text-paragraphDesktop text-mobParagraph focus:outline-none focus:bg-[#e99f3d]"
                  type="text"
                  placeholder={lName}
                  {...register("mbiemri", { required: true })}
                />
              </div>
              <div className="flex md:flex-row flex-col w-full gap-8 md:pb-4 pb-8">
                <input
                  className="bg-orange-main placeholder-white text-white pl-4 py-2 rounded-xl md:text-paragraphDesktop text-mobParagraph
                font-paragraphDesktop md:w-1/2 focus:outline-none focus:bg-[#e99f3d]"
                  type="email"
                  placeholder={email}
                  {...register("email", { required: true })}
                ></input>
                <input
                  className="bg-orange-main placeholder-white text-white pl-4 py-2 rounded-xl md:w-1/2 md:text-paragraphDesktop text-mobParagraph focus:outline-none focus:bg-[#e99f3d] "
                  type="tel"
                  placeholder={phone}
                  {...register("tel", { required: true })}
                ></input>
              </div>
              <div className="w-full pb-4 ">
                <textarea
                  className="bg-orange-main placeholder-white text-white pl-4 py-2 rounded-xl md:text-paragraphDesktop text-mobParagraph
                w-full h-[18vw] focus:outline-none focus:bg-[#e99f3d]"
                  type="text"
                  placeholder={message}
                  {...register("mesazhi", { required: true })}
                />
              </div>
              <input
                type="submit"
                className="button-red md:py-2 md:px-0 md:w-1/4 cursor-pointer md:text-paragraphDesktop text-mobParagraph py-8 px-8"
                value={send}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
