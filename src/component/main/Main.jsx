import { MainNav } from './MainNav'
import { MainSidebar } from './mainSidebar/MainSidebar'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import { CenterBlockFilter } from './mainCenterblock/CenterblockFilter'
import { items } from './mainCenterblock/contentPlaylist/Item'
import { PlayListItem } from './mainCenterblock/contentPlaylist/PlaylistItem'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton';



export function Main() {
  const [loading,setLoading] = useState(true)
 useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
    }, [])

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
        <div className="centerblock__content"> <SkeletonTheme baseColor="#313131" highlightColor="#444">
                <div className="content__playlist playlist">
            {items.map((item,index) => (
              <PlayListItem key= {index} item={item} loading={loading} />
            ))}
          </div> </SkeletonTheme>
        </div>
      </div>
      <MainSidebar />
    </main>
  )
}
