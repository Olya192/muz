import { MainNav } from './MainNav'
import { MainSidebar } from './mainSidebar/MainSidebar'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import { CenterBlockFilter } from './mainCenterblock/CenterblockFilter'
import { items } from './mainCenterblock/contentPlaylist/Item'
import { PlayListItem } from './mainCenterblock/contentPlaylist/PlaylistItem'


export function Main() {
  return (
    <main className="main">
      <MainNav />
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <CenterBlockSearch />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <CenterBlockFilter />
        </div>
        <div className="centerblock__content">
          <CenterBlockFilter />
          <div className="content__playlist playlist">
            {items.map((item,index) => (
              <PlayListItem key= {index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <MainSidebar />
    </main>
  )
}
