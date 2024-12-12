import './App.css';
import header_logo from "../src/assets/images/header_logo.svg"
import { FaPlus, FaDownload } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { CiSearch, CiHome } from "react-icons/ci";

function App() {



  function elonFunc(e) {
    e.preventDefault();

    let { time, date, select, select_dev, link, ismi, tel1, tel2, text, tavsif, textarea,select_on} = e.target;

    console.log("Vaqti: " + time.value);
    console.log("Sanasi: " + date.value);
    console.log("Yo'nalish belgisi: " + select.value);
    console.log("Ichki yonalishi: " + select_dev.value);
    console.log("Linkni kriting: " + link.value);
    console.log("Ismi: " + ismi.value);
    console.log("Professiyasi: " + text.value);
    console.log("Tadbir turi: " + select_on.value);
    console.log("Telefon raqami: " + tel1.value);
    console.log("Qo'shimcha tel raqami: " + tel2.value);
    console.log("Desdrepton: " + tavsif.value);
    console.log("Mavzu matni: " + textarea.value);


  }






  return (
    <div className="app">
      <div className="header_color">
        <header className="header">
          <img src={header_logo} alt="" className="header_logo" />
          <div className="input">
            <CiSearch className='icon' />
            <input type="text" placeholder='Izlash' className='input_child' />
          </div>
          <p className="header_text1">Biz haqimizda</p>
          <p className="header_text2">Savol va javoblar</p>
          <button className="header_btn">
            <FaPlus />
            E’lon berish
          </button>
        </header>
      </div>
      <div className="container">
        <div className="home">
          <CiHome className='icon2' />
          E’lon berish
        </div>




        <p className="main_text">E’lon berish</p>
        <form className="form" onSubmit={(e) => elonFunc(e)}>
          <div className="vaqt">
            <p className="input_text">Vaqt va yo’nalishni tanlang</p>
            <p className="input_pech">O’tkaziladigan sanani kiriting</p>
            <div className="inputs">
              <input
                name='date'
                type="date"
                required
                className='input1'
              />
              <input
                name='time'
                type="time"
                required
                className='input2'
              />
            </div>
            <div className="inputs2">
              <div className="elon_input">
                <p className="input_pech2">Yo’nalishni belgilang</p>
                <select className='select1' name='select'>
                  <option value="Web dasturlash">Web dasturlash</option>
                  <option value="Mobile dasturlash">Mobile dasturlash</option>
                  <option value="Grafik dizayn">Grafik dizayn</option>
                  <option value="linklar">linklar</option>
                  <option value="mexanik">mexanik</option>
                  <option value="Matimatika">Matimatika</option>
                  <option value="Fizika">Fizika</option>
                  <option value="Menejment">Menejment</option>
                </select>
              </div>
              <div className="elon_input">
                <p className="input_pech2">Ichki yoэnalish</p>
                <select className='select2' name='select_dev'>
                  <option value="Python developer">Python developer</option>
                  <option value="Fronten developer">Fronten developer</option>
                  <option value="Bakent developer">Bakent developer</option>
                  <option value="Grafik dzayner">Grafik dzayner</option>
                  <option value="Moushen grafic">Moushen grafic</option>
                  <option value="Java developer">Java developer</option>
                  <option value="O'quv markazi">O'quv markazi</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
            </div>
            <div className="inputs3">
              <div className="elon_input">
                <p className="input_pech2">Tadbir turi</p>
              

                <select className="radio_select" name='select_on'>
                <option value="Onlain">Onlain</option>
                <option value="Ofline">Ofline</option>
                </select>


              </div>
              <div className="elon_input">
                <p className="input_pech2">Link kiriting</p>
                <input type="text" required placeholder='Link kiriting' className='select2' name='link' />
              </div>
            </div>
          </div>





          <div className="tashkilot">
            <p className="input_text2">Tashkilotchi</p>
            <div className="tashkilot_card">
              <div className="inputs4">
                <div className="elon_input">
                  <p className="input_pech2">Ismi sharifi</p>
                  <input
                    name='ismi'
                    type="text"
                    required
                    placeholder='Ismi sharifi...'
                    className='select2'
                  />
                </div>
                <div className="elon_input">
                  <p className="input_pech2">Professiya</p>
                  <input
                    name='text'
                    type="text"
                    required
                    placeholder='Professiya...'
                    className='select2'
                  />
                </div>
              </div>
              <div className="inputs5">
                <div className="elon_input">
                  <p className="input_pech2">Telefon raqami</p>
                  <input
                    name='tel1'
                    type="text"
                    required
                    placeholder='998'
                    className='select2'
                  />
                </div>
                <div className="elon_input">
                  <p className="input_pech2">Qo’shimcha tel raqam</p>
                  <input
                    name='tel2'
                    type="text"
                    required
                    placeholder='998'
                    className='select2'
                  />
                </div>
              </div>
            </div>
          </div>





          <div className="post">
            <p className="post_text">Post</p>
            <p className="post_title">MAVZUNI SARLAVHASI</p>
            <p className="post_text1">Description</p>
            <input
              name='tavsif'
              type="text"
              required
              placeholder='Description...'
              className='post_input'
            />
            <p className="post_text2">Rasm yuklash</p>
            <div className="post_btn">
              <FaDownload />
              Upload img
            </div>
            <p className="post_text3">Yuklanyotgan rasm o'lchami 1080x1080 hajmi 2 mb dan oshmasin</p>
            <p className="post_text4">Mavzu matni</p>
            <textarea name="textarea" id="" cols="90" rows="20" className='textarea'>Mavzu matni</textarea>
            <input type="reset" className='post_btn2' />
            <button className="post_btn3">E'lonni yuborish</button>
          </div>
        </form>
      </div>
      <footer className="footer">
        <img src={header_logo} alt="" className="footer_logo" />
        <p className="footer_text">Biz haqimizda</p>
        <p className="footer_text2">Savol va Javoblar</p>
        <div className="fon">
          <FaPhoneAlt />
          <a href="tel:">+71 200-11-02</a>
        </div>
        <div className="footer_linklar">
          <FaFacebookF className='link' />
          <FaInstagram className='link' />
          < FaTelegramPlane className='link' />
        </div>
      </footer>
    </div>
  );
}

export default App;
