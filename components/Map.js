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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23376.412522249262!2d21.190029364415633!3d42.91395345506029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354aea1a29a7bcf%3A0x3c039becb1c8cd66!2sAnanas%20Impex!5e0!3m2!1sen!2s!4v1696566098506!5m2!1sen!2s"      style={{
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
