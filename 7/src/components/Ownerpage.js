import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


const Ownerpage=()=> {
  const onSelectFile=(event)=>{
    const selectedFiles=event.target.files;
    const selectedFilesArray=Array.from(selectedFiles);
    const imagesArray=selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(imagesArray);
  };
  return (
    <div className="container w-75">
    <h2 className="align-center">RentARoom</h2>
    <h2>House Details</h2>
    <div className="form-group mb-3">
      <label for="exampleFormControlSelect1">House name:</label>
      <input type="text" class="form-control" id="hname"/>
    </div>
    <div className="form-group mb-3">
    <label for="exampleFormControlSelect1">Types*:</label>
     <select className="form-control" id="exampleFormControlSelect1">
      <option>House</option>
      <option>Room</option>
      </select>
    </div>
    <div className="input-group mb-3"></div>
  <div className="form-group  mb-3">
    <label for="exampleFormControlSelect1">Accomodation For</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Boys</option>
      <option>Girls</option>
    </select>
    <div className="input-group mb-3"></div>
  <div className="form-group  mb-3">
    <label for="exampleFormControlSelect1">No. of Bedrooms</label>
    <input type="text" id="form12" className="form-control" />
 
    <div className="form-group mb-3">
    <label for="exampleFormControlSelect1">No. of person can Accomodate</label>
    <input type="text" id="form12" className="form-control" />
  </div>
  </div>
  <div className="form-group mb-3">
    <label for="exampleFormControlSelect1">No. of Bathrooms</label>
    <input type="text" id="form12" className="form-control" />
  </div>
  <div className="form-group  mb-3">
    <label for="exampleFormControlSelect1">Furnishing</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Fully Furnished</option>
      <option>semi-Furnished</option>
      <option>unfurnished</option>
    </select>
  </div>
  <div className="form-group mb-3">
    <section>
    <label>+ Add images
    <br/><span>upto 10 images</span>
    <input type="file" name="images" onChange={onSelectFile} multiple accept="image/jpeg,image/png,image/webp"/>
    </label>
    </section>
  </div>
  <div className="form-group mb-3">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <div className="form-group mb-3">
      <label for="exampleFormControlSelect1">Price:</label>
      <input type="text" class="form-control" id="hname"/>
    </div>
    <div className="form-group mb-3">
      <label for="exampleFormControlSelect1-">Location</label>
      <br/><br/>
    </div>
    <div className="form-group mb-3">
    <button class="btn btn-primary" type="submit">Add</button>
    </div>
    </div>    
    </div>
  )
}

export default Ownerpage;