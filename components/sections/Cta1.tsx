"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Cta1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="box-cta-1 background-100 py-96">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5 wow fadeInUp">
              <div className="card-video">
                <div className="card-image">
                  <img
                    src="/assets/imgs/cta/cta-1/video-2.jpg"
                    alt="Perfect plus"
                    style={{ objectFit: "cover", height: 350 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <span className="btn btn-signin bg-white text-dark mb-4 wow fadeInUp">
                Best Truck Driving School
              </span>
              <h4 className="mb-4 neutral-1000 wow fadeInUp">
                Receive a Competitive Offer To Enroll Yourself.
              </h4>
              <p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">
                We are committed to delivering exceptional service, competitive
                pricing, and a diverse selection of options for our customers.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-ticks-green">
                    <li
                      className="neutral-1000 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Expert Certified Trainers
                    </li>
                    <li
                      className="neutral-1000 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Get Reasonable Price
                    </li>
                    <li
                      className="neutral-1000 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Genuine Vehicles
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-ticks-green wow fadeInUp">
                    <li
                      className="neutral-1000 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      First Class Services
                    </li>
                    <li
                      className="neutral-1000 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Proffesional Vehicles
                    </li>
                    <li
                      className="neutral-1000 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Free Pick-Up &amp; Drop-Offs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="JXMWOmuR1hU"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
