import useWindowSize from "../hooks/useWindowSize";
const containerStyle = {
  width: "50vw",
  height: "600px",
};
const center = {
  lat: 42.90717674451501,
  lng: 21.192980047995942,
};

const Map = () => {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  return (
    <iframe
      className="md:h-[60vw] md:w-[40vw] md:mask
      h-[60vh] w-[80vw] mapMaskMobile"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.380869817903!2d21.19081281540465!3d42.90700780837733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354aeb47fb1b2fb%3A0xe7b4d025479a3582!2sZahir%20Pajaziti%2C%20Besian%C3%AB!5e0!3m2!1sen!2sch!4v1672780503097!5m2!1sen!2sch"
      style={{
        border: 0,
      }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      disableDefaultUi={true}
    ></iframe>
  );
};

export default Map;
