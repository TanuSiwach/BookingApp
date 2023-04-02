import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {
    const {data,loading,error }=useFetch("/hotels/countByType");
    const images=[
        "https://content.r9cdn.net/rimg/himg/44/65/28/expediav2-389623-2a7fc4-571970.jpg?width=335&height=268&crop=true",
        "https://content.r9cdn.net/rimg/himg/44/65/28/expediav2-389623-2a7fc4-571970.jpg?width=335&height=268&crop=true" ,
        "https://content.r9cdn.net/rimg/himg/44/65/28/expediav2-389623-2a7fc4-571970.jpg?width=335&height=268&crop=true",
        "https://content.r9cdn.net/rimg/himg/44/65/28/expediav2-389623-2a7fc4-571970.jpg?width=335&height=268&crop=true",
        "https://content.r9cdn.net/rimg/himg/44/65/28/expediav2-389623-2a7fc4-571970.jpg?width=335&height=268&crop=true"
    ];

  return (
    <div className="pList">
        { loading ? ("loading"):(  
        <>
        {data && images.map((img,i) => (
            <div className="pListItem" key={i}>
            <img src={img} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2> {data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>
        ))
        }
        </>
        )}
    </div>
  );
};

export default PropertyList;