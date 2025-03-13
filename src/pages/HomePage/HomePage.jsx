import domImage from '../../assets/dom.jpg';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <main className='container'>
        <section className='main'>
          <h2 className='title_h1'>Розміщуется контент для домашньої сторінки</h2>
        </section>
        <section className='image_cat'>
          <img src={domImage} alt="Дом" />
        </section>
        <section className='imageCat'>
          <img src="images/hq720.jpg" alt="малюнок" />
        </section>
      </main>
    </>
  );
}

export default HomePage;
