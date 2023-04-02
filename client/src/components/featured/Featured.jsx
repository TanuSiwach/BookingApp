import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const {data,loading,error }=useFetch("/hotels/countByCity?cities=india,london,berlin");
  return (
    <div className="featured">
        {loading ? ("Loading please wait "):(
            <>
            <div className="featuredItem">
            <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>India</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.getyourguide.com/img/location/533591c8ce856.jpeg/68.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePTnReHZXQnQMiXV5y8cXHVlDMtSvZ1yFDg&usqp=CAU" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBeq6RK5RZ8HCAWGcOiFBgTJ4IkHjnY4veg&usqp=CAU" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Banglore</h1>
                <h2>{data[3]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPYcbnbNGbnu9S9bMhbm20mbQCKZfFjZv7g&usqp=CAU" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Chennai</h1>
                <h2>{data[4]} properties</h2>
            </div>
        </div>
        </>)}
    </div>
  );
};

export default Featured;