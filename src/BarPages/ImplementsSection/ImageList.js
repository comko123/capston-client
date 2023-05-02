const ImageList = ({ regis, number }) => {
    return (Object.keys(regis).length === 1 ?
        <a href="https://www.musinsa.com/app/" target="blank">
            <img src={regis.clothesList[number]} className="imgTag"
                alt="이미지를 불러오는데 실패하였습니다." /></a> : Object.keys(regis).length === 2 ?
            <div className="errorText">{regis.errorMessage}</div> : null)
}
export default ImageList