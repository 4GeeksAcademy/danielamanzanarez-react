import React from "react";

export const Card = () => {
    return(
<div className="row row-cols-1 row-cols-md-4 g-3 container-fluid mt-1 mb-3 mx-5 px-5">
  <div className="col">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tS7RHhFNqyGybRm-Rzdzepda7WTD7gDwQQ&s" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Landing Page con React</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary d-grid gap-2 col-6 mx-auto" type="button">Ingresar</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tS7RHhFNqyGybRm-Rzdzepda7WTD7gDwQQ&s" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pruebas con Jest</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
      <button className="btn btn-primary d-grid gap-2 col-6 mx-auto" type="button">Ingresar</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tS7RHhFNqyGybRm-Rzdzepda7WTD7gDwQQ&s" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Cartas Aleatorias</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary d-grid gap-2 col-6 mx-auto" type="button">Ingresar</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tS7RHhFNqyGybRm-Rzdzepda7WTD7gDwQQ&s" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">El DOM Front-End</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary d-grid gap-2 col-6 mx-auto" type="button">Ingresar</button>
      </div>
    </div>
  </div>
</div>


    );
};