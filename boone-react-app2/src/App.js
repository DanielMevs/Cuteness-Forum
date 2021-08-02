import './App.css';
import Card from './components/Card';
import FizzBuzzForm from './components/FizzBuzzForm';


function App() {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active" href="#">Gift Shop</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Art Work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="#">Church of Boone</a>
        </li>
      </ul>
      <hr/>
        <h1 className="page-header">Boone Is Cool - <small>The Official Fan Page</small></h1>
        <p class="lead">The Cat, The Legend, The God</p> <p> <mark>Boone-Fanatics Rejoice!</mark> Your <del>saviour</del>, <del>idol</del>, benevolent overlord is back with a bag full of cuteness!</p>
    <hr/>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <img src="https://i.imgur.com/xcd6vwQ.jpg" id="boone-portrait" />
            </div>
            <div className="col-md-7">
              <blockquote className="blockquote-reverse">
                  <p> "Boone is so powerful, it defies all laws of this or any other universe. Recent studies have shown that people who have attempted to comprehend this name have either disappeared, died spontaneously, or driven themselves into a pertinent state of insanity and/or catatonia. Quantum physicists report that this Boone is Everything and Nothing. Various theologists and spiritual leaders believe that Boone is one who is, as they say, "The Answer". All attempts to understand this idea of Boone have failed." </p>
                  <footer>Quote by <cite title="Morgan Freeman">Stephan Hawking</cite></footer>
              </blockquote>
            </div>
        </div>
      </div>
      <hr/>
      <div class="container">
        <h2>Biography</h2>
        <div class="row">
            <div class="col-md-4">
                <p>Boone was delivered in a flower pot to an animal shelter in the summer of 2019 along with his brother Danny. The whereabouts of their siblings are unknown. After being adopted, the new owner developed health issues and had to give them away.</p>
            </div>
            <div class="col-md-4">
                <p>In the Spring of 2020, the kittens we adopted into a caring household where they reside to this day. Boone quickly gained a presence as outgoing and exploratory, a sharp contrast to his more reserved brother.</p>
            </div>
            <div class="col-md-4">
                <p>Boone quickly gained a following, as people instantly gravitated towards his big personality, big head, and his chunky belly. Boone now spends most of his days eating tuna, sniffing cat-nip, and ruling over the Church of Boone.</p>
             </div>
      </div>
      <hr/>
      <div id="cuteness-forum">
        <h2>Cuteness Forum</h2>
        <Card url="https://i.imgur.com/Re9fTVc.jpg" title="Boone being Silly" text="Here we see Boone in his natural environment, looking super cute."/>
        <Card url="https://i.imgur.com/Wg7V53f.jpg" title="Boone being Cute" text="Boone showing us that he is clearly a more evolved specimen of a cat."/>
        <Card url="https://i.imgur.com/JunhZVx.jpg" title="Boone being Kind" text="Boone helping his brother nap by graciously providing a pillow with his fury belly."/>
        <br/>
        <Card url="https://i.imgur.com/R8MaPkw.jpg" title="Boone beig Adorable" text="My finger, being blessed by Boone's majestic holiness."/>
        <Card url="https://i.imgur.com/cSb0PcO.jpg" title="Boone beig Charming" text="The complete and utter stud, known as Boone, gracing the camera with his emperial likeness."/>
        <Card url="https://i.imgur.com/KZrXzzh.jpg" title="Boone being the Boss" text="Alpha cats do what they want. Here we see boone embodying this mentality whole-heartedly"/>
      </div>
      <hr/>
      <div className="container">
        <h2>Donate to the Church of Boone</h2>
        <p>The Church of Boone is dedicated to spreading the good news of Boone and his holy doctrine! In order to do so, we need all the cat-food and money to keep Boone well fed and groomed. To help with this nobel cause, enter the amount you wish to contribute. Know that you money is being well spend in keeping the legacy of this wonderful cat alive and chunky. Be sure to add a picture and a short description to let Boone know you care. Thank you!</p>

      </div>
    </div>

    <div className="container">
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Add Name"></input>
          <label>Email</label>
          <input type="email" class="form-control" placeholder="Add Email"></input>
        </div>
        <div className="form-group">
          <label>Amount to Donate</label>
          <select class="form-control">
              <option value="five">$5</option>
              <option value="ten">$10</option>
              <option value="20">$20</option>
              <option value="50">$50</option>
              <option value="80">$80</option>
              <option value="100">$100</option>
          </select>
          <br/>
        </div>
        <div className="form-group">
          <label>Upload File</label>
          <input type="file"/>
          <p class="help-block">Only png and jpg allowed</p>
        </div>

        <div className="checkbox">
          <label>
            I agree to Boone's Term's and Conditions
            <input name="agree" type="checkbox"/>
          </label>
          
          
        </div>
        <div className="container">
          <br/>
          <button type="submit" className="btn btn-primary">Donate</button>
        </div>
        
      </form>
    <hr/>
          
          <footer>
             <p>Post by: Daniel Mevs, Fan Club Founder</p>
             <p>Contact information: <a href="daniel@boone-is-cool.com">
             daniel@booneiscool.com</a></p>
             <p>Copy-right: Boone Is Cool Fan Club &#169; </p>
             <hr/>
           </footer>
           
    </div>
    </div>

  );
}

export default App;
