import { CDN_URl } from "../utils/constants";
const ResCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img
          alt="Image"
          className="res-image"
          src={CDN_URl + resData.cloudinaryImageId}
        />
        <h3>{resData.resName}</h3>
        <h4>{resData.cusine}</h4>
        <h4>{resData.delTime}</h4>
        <h4>{resData.rating}</h4>
      </div>
    );
};

export default ResCard;