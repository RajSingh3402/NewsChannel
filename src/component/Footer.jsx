import React from 'react'
import Wrapper from './Wrapper'

const Footer = () => {
    return (
        <div className="bg-purple-950 text-white pb-6 pt-2">
            <Wrapper>
                <footer className="footer sm:footer-horizontal p-10 text-white/80">
                    <nav>
                        <h6 className="footer-title text-purple-300 opacity-100">Services</h6>
                        <a className="link link-hover hover:text-white">Branding</a>
                        <a className="link link-hover hover:text-white">Design</a>
                        <a className="link link-hover hover:text-white">Marketing</a>
                        <a className="link link-hover hover:text-white">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-purple-300 opacity-100">Company</h6>
                        <a className="link link-hover hover:text-white">About us</a>
                        <a className="link link-hover hover:text-white">Contact</a>
                        <a className="link link-hover hover:text-white">Jobs</a>
                        <a className="link link-hover hover:text-white">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-purple-300 opacity-100">Legal</h6>
                        <a className="link link-hover hover:text-white">Terms of use</a>
                        <a className="link link-hover hover:text-white">Privacy policy</a>
                        <a className="link link-hover hover:text-white">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title text-purple-300 opacity-100">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label pb-2">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item text-black w-full" />
                                <button className="btn bg-purple-600 hover:bg-purple-500 text-white border-none join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                
                <div className="border-t border-purple-800/50 mt-4 pt-6 text-center text-sm text-purple-300">
                    <p>Copyright © 2024 - All rights reserved by NewsPulse</p>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer
