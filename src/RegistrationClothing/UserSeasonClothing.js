import UserSelectorList from "./UserSelectorList"
const UserSeasonClothing = ({season,seasonList,storeText,includeElement}) => {
      return (<div className={"Myadress_main_component"}>
      <h3 style={{"margin": "0px"}} className={"Myadress_main_component_title"}>{season}</h3>
      {seasonList.map((clothing,number) => <UserSelectorList key={clothing}
      value={seasonList[number]} includeElement={includeElement}
      season={season} clothing ={clothing} list={storeText}
      />)}</div>)}
export default UserSeasonClothing  