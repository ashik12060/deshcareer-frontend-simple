import React from 'react'

const VideoGallery = () => {
  return (
    <section className="leader-container py-5">
        <div>
          <h1 className="gallery">Video Gallery</h1>
          <hr className="horizontal-style" />

          <div class="container text-center">
            <div class="row">
              <div className=" col-lg-4 col-md-6 col-sm-12 ">
                <div>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/k0FC8biMK6A"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/YrpRgqawOBo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/Cn-q-gXmrBA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/sE64kscT1pA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/o3rR5_O0hss"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/sPWnaUul8OQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className='p-2'>View More</button>
        </div>
      </section>
  )
}

export default VideoGallery