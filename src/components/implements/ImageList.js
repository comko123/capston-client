const ImageList = ({ regis, number }) => {
    return (Object.keys(regis).length === 1 ?
            <img src={regis.clothesList[number]} className="imgTag" loading="lazy"
                alt="이미지를 불러오는데 실패하였습니다." /> : Object.keys(regis).length === 2 ?
            <div className="errorText">{regis.errorMessage}</div> : null)
}
export default ImageList