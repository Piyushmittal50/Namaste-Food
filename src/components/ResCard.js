import { CDN_URl } from "../utils/constants";
const ResCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img
          alt="Image"
          className="res-image"
          src={CDN_URl + resData.info.cloudinaryImageId}
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(" , ")}</h4>
        <h4>{resData.info.sla.deliveryTime}</h4>
        <h4>{resData.info.avgRating}</h4>
      </div>
    );
};

export default ResCard;