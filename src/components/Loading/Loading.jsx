import "./Loading.css";
import React from "react";

function template() {
  return (
    <div className="loading">
      <a href="/" class="logo"></a>
		<article class="wwdc">
		  <span class="spin">
		      
		      <div class="large circle one"></div>
		      <div class="large circle two"></div>
		      <div class="large circle three"></div>
		      <div class="large circle four"></div>
		      <div class="large circle five"></div>
		      <div class="large circle six"></div>
		      <div class="large circle seven"></div>
		      <div class="large circle eight"></div>
		    </span>
		  <span class="pulse">
		      
		      <div class="small circle one"></div>
		      <div class="small squircle two"></div>
		      <div class="small circle three"></div>
		      <div class="small squircle four"></div>
		      <div class="small circle five"></div>
		      <div class="small squircle six"></div>
		      <div class="small circle seven"></div>
		      <div class="small squircle eight"></div>
		    </span>
		  
		  <span class="spin-reverse">
		        <div class="large squircle one"></div>
		      </span>
		  <div class="large squircle two">
		    <div class="content">
		      <br/><br/><br/>
		      <h1>Misthos</h1>
		      <p><strong>Loading...</strong></p>
		    </div>
		  </div>
		</article>
    </div>
  );
};

export default template;
