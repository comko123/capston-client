import { Link } from "react-router-dom"

const LogoWithMainPage =()=>{
    const [logo,setLogo] = useState(true)

    const input = () =>{
        if(sessionStorage.getItem("logo") === null){
            setTimeout(()=>{setLogo(false)},3000)
            console.log(logo)
            if(logo){sessionStorage.setItem("logo","checked");console.log(logo)}
        }
        else{setLogo(false)}
    }
    useEffect(()=>{input()},[])
//intelli j confirm
    return(
            <>
            {
            (sessionStorage.getItem("logo") === null)?
            <><h1>weather coder</h1></>
            :
            <>
            <span>weather coder logo</span>
            <span><Link>마이 페이지</Link></span>
            </>
            }        
            </>
        )

}
export default LogoWithMainPage;