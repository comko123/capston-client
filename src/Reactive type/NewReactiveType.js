import { useMediaQuery } from 'react-responsive';
export  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    console.log(isDesktop)
    console.log(children)
    return isDesktop ? children : null
  }
export  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    console.log(isTablet)
    console.log(children)
    return isTablet ? children : null
  } 
export  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    console.log(isMobile)
    console.log(children)
    return isMobile ? children : null
  }
export  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
      console.log(isNotMobile)
    console.log(children)
    return isNotMobile ? children : null
  }
  export default function NewReactiveType({children}){
      return(<div>
            <Desktop>{children}</Desktop>
            <Tablet>{children}</Tablet>
            <Mobile>{children}</Mobile>
            
      </div>)

  } 
