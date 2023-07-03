import { MainNav } from './MainNav'
import { MainSidebar } from './MainSidebar/MainSidebar'
import { CenterBlockSearch } from './main__centerblock/Centerblock/CenterblockSearch'
import { CenterBlockFilter } from './main__centerblock/CenterblockFilter'
import { items } from './main__centerblock/ContentPlaylist/Item'
import { PlayListItem } from './main__centerblock/ContentPlaylist/PlaylistItem'


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
