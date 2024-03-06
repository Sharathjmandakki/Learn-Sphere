import React from 'react'

export default function Help() {
  const url="https://img.freepik.com/free-photo/high-angle-couple-hiking-trip_23-2150343062.jpg?w=996&t=st=1709208200~exp=1709208800~hmac=ab9465bf4f68b49364ca56d5ab432cb6843eba25be678c5992a83de11b3c1b6f";
  return (
    <div class="block m-10 p-10 items-center bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 dark:bg-gray-800 ">
    <h1 class="flex justify-center mb-5 text-red-300 font-sans text-3xl">Demo</h1>
    <div class="flex justify-center">
      <iframe width="920" height="480" style={{borderRadius:'10px'}} src="https://www.youtube-nocookie.com/embed/dphagk4O5qA?si=A6QlL4ws2hFVLgwE&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  )
}
