import BatismoSlider from '../components/BatismoSlider'
import { batismoPhotos } from '../data/photos'

function Batismo() {
  return (
    <main className="pt-16">
      <BatismoSlider photos={batismoPhotos} />
    </main>
  )
}

export default Batismo