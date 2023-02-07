import React from 'react'
import "./coming.css"

export default function coming() {
  return (
    <div>

      <h1>Coming....</h1>
      <h1 className='marvel'>Marvel</h1>
      <div class="containerComing">
          <div class="card">
            <h3 class="title">Ant man</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="antMan">
              <img className='antMan'  src='https://hips.hearstapps.com/hmg-prod/images/ant-man-and-the-wasp-poster-1673332386.jpg' alt='' />
            </div>
          </div>
          <div class="card">
            <h3 class="title">Guardians of galaxy</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
          </div>
          <div class="card">
            <h3 class="title">Avenger Secret Wars</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
          </div>
          <div class="card">
            <h3 class="title">The marvels</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
          </div>
        </div>
      
    </div>
  )
}
