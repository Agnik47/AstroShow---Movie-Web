import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Horizontalcards from "../partials/Horizontalcards";
import Dropdown from "../partials/Dropdown";
import { asyncloadperson, removePerson } from "../store/actions/personAction";
import P_DeatilsLoader from "../utils/P_DeatilsLoader";
import NoProfile from "../accets/NoProfile.gif"


const PersonDetails = () => {
    document.title = "AstroShow - Person Details";

    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.person);
    const dispatch = useDispatch();
    const [category, setcategory] = useState("movie");
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(asyncloadperson(id));
        return () => {
            dispatch(removePerson());
        };
    }, [id]);

    return (
        <>
            {info ? (
                <div className="px-5 md:px-10 lg:px-20 w-full min-h-[240vh] lg:min-h-[160vh] bg-[#1F1E24]">
                    <nav className="h-[10vh] flex items-center gap-5 md:gap-10 text-xl text-zinc-100 mb-5">
                        <Link
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
                        ></Link>
                        <span className="text-2xl font-bold text-white">Person Details</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row lg:gap-10">
                        {/* Left Sidebar */}
                        <div className="lg:w-1/4 mb-10 lg:mb-0">
                            <img
                                className="shadow-lg rounded-lg w-full h-80 lg:h-auto object-cover"
                                src={ info.detail.profile_path ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}` : NoProfile}
                                alt=""
                            />
                            <hr className="mt-5 border-none h-[1px] bg-zinc-500" />
                            
                            <div className="text-2xl text-white flex gap-3 mt-5">
                                {/* Social Links */}
                                {info.externalid.wikidata_id && (
                                    <a
                                        target="_blank"
                                        href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                                        className="hover:text-[#6556CD]"
                                    >
                                        <i className="ri-earth-fill"></i>
                                    </a>
                                )}
                                {info.externalid.facebook_id && (
                                    <a
                                        target="_blank"
                                        href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                                        className="hover:text-[#6556CD]"
                                    >
                                        <i className="ri-facebook-circle-fill"></i>
                                    </a>
                                )}
                                {info.externalid.instagram_id && (
                                    <a
                                        target="_blank"
                                        href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                                        className="hover:text-[#6556CD]"
                                    >
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                )}
                                {info.externalid.twitter_id && (
                                    <a
                                        target="_blank"
                                        href={`https://twitter.com/${info.externalid.twitter_id}`}
                                        className="hover:text-[#6556CD]"
                                    >
                                        <i className="ri-twitter-fill"></i>
                                    </a>
                                )}
                            </div>
                            
                            <div className="text-white mt-5 space-y-2">
                                <h2 className="text-lg font-semibold text-zinc-400">Person Info</h2>
                                <p><strong>Known For:</strong> {info.detail.known_for_department}</p>
                                <p><strong>Gender:</strong> {info.detail.gender === 2 ? "Male" : "Female"}</p>
                                <p><strong>Birthday:</strong> {info.detail.birthday}</p>
                                <p><strong>Deathday:</strong> {info.detail.deathday || "Still Alive"}</p>
                                <p><strong>Place Of Birth:</strong> {info.detail.place_of_birth}</p>
                                <p><strong>Also Known As:</strong> {info.detail.also_known_as.join(", ")}</p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:w-3/4 text-white">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-5">{info.detail.name}</h1>

                            <div className="mb-5">
                                <h2 className="text-xl font-semibold text-zinc-400">Biography</h2>
                                <p className="text-zinc-400 mt-2 leading-relaxed max-h-40 overflow-y-auto">{info.detail.biography}</p>
                            </div>

                            <h2 className="text-lg font-semibold text-zinc-400">Known For</h2>
                            <Horizontalcards h1Header="hidden" data={info.combinedCredits.cast} />

                            <div className="flex justify-between items-center mt-8">
                                <h2 className="text-xl font-semibold text-zinc-400">Acting</h2>
                                <Dropdown
                                  selectedOption={
                                    category === "tv"
                                      ? "TV Shows"
                                      : category === "movie"
                                      ? "Movies"
                                      : "All"
                                  }
                                    title="Category"
                                    options={["tv", "movie"]}
                                    onOptionChange={setcategory}
                                />
                            </div>

                            <div className="list-disc text-zinc-400 w-full max-h-60 mt-5 overflow-y-auto border border-zinc-700 p-5 rounded-md bg-[#1F1E24]">
                                {info[`${category}Credits`].cast.map((c, i) => (
                                    <li
                                        key={i}
                                        className="p-3 rounded hover:bg-[#2A2A32] cursor-pointer transition-colors duration-300"
                                    >
                                        <Link to={`/${category}/details/${c.id}`}>
                                            <span>{c.name || c.title || c.original_name || c.original_title}</span>
                                            <span className="block mt-1 text-sm">
                                                {c.character && `Character: ${c.character}`}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <P_DeatilsLoader />
            )}
        </>
    );
};

export default PersonDetails;
