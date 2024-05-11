/* eslint-disable react/prop-types */

function Avatar({ url, alt, w, h }) {
  return (
    <div>
      <div
        className={`w-${w} h-${h} overflow-hidden rounded-full flex items-center justify-center`}
      >
        <img src={url} alt={alt} />
      </div>
    </div>
  );
}

export default Avatar;
