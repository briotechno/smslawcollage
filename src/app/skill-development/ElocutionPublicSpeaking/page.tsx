"use client";

import React from 'react'
import { Megaphone } from 'lucide-react'
import { motion } from "framer-motion";

const ElocutionPublicSpeaking = () => {
    return (
        <div id="Elocution-Public-Speaking" className="bg-gray-50 py-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
                        <Megaphone className="w-10 h-10 text-purple-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
                        Elocution <span className="text-purple-600"> & Public Speaking
                        </span>
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                </motion.div >

                <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
                    <p className="text-lg text-gray-700 text-justify mb-6">
                        A law faculty, elocution and public speaking are not merely desirable skills but fundamental tools for professional success. Elocution, the art of clear and expressive speech, provides the technical foundation, while public speaking is the broader, tactical application of oratory in various legal settings. Together, they equip future lawyers with the capacity to communicate complex arguments persuasively and confidently.
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className='text-gray-700'>Law schools are instrumental in developing these competencies. Through simulated courtroom settings, oratory skills are continuously refined via:</p>

                        <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
                            <li><span className="font-bold">
                                Moot Courts:</span>
                                Students present mock appellate arguments, learning to structure logical presentations and respond to intense questioning from judges.</li>

                            <li><span className="font-bold">
                                Debate and Discussion:</span>
                                Classroom participation and dedicated debate clubs sharpen a student’s ability to think on their feet and articulate ideas clearly.</li>

                            <li><span className="font-bold">
                                Client Interactions: </span>
                                Law school curricula often include role-playing exercises that teach students to communicate intricate legal matters to lay clients.</li>
                        </ul>
                    </div>
                    <p className="text-lg text-gray-700 text-justify my-6">
                        These practical applications reinforce the skills of effective delivery. Mastering vocal techniques such as tone, pace, and projection is crucial for capturing and holding an audience's attention. A lawyer's non-verbal communication—including eye contact, posture, and gestures—also plays a significant role in projecting authority and conviction.
                    </p>
                    <p className="text-lg text-gray-700 text-justify mb-6">
                        The benefits extend far beyond the campus. Strong public speaking skills are essential for courtroom advocacy, where a clear, confident, and well-structured argument can sway judges and juries. Furthermore, these skills are vital in negotiations, client counselling, and professional networking. Ultimately, proficiency in elocution and public speaking enhances a lawyer's credibility, influence, and overall career trajectory.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-purple-900 to-purple-600 text-white p-8 rounded-xl mb-12">
                        <p className="text-xl md:text-2xl leading-relaxed text-center max-w-7xl mx-auto">
                            Developing strong public speaking and advocacy skills is crucial for success in the legal profession.
                            Our comprehensive program helps students master these essential skills through structured training and practice.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-sm">Students Trained</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <div className="text-2xl font-bold">50+</div>
                                <div className="text-sm">Competition Wins</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <div className="text-2xl font-bold">24</div>
                                <div className="text-sm">Annual Events</div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Achievement */}
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                        <div className="flex items-center gap-3 mb-3">
                            <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-lg font-semibold text-yellow-800">Latest Achievement</h3>
                        </div>
                        <p className="text-yellow-800">
                            Our students won the National Law School Debate Championship 2025, competing against 50+ premier law institutions across the country.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Regular Training Sessions</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Voice modulation and pronunciation workshops</li>
                                <li>Legal terminology and vocabulary enhancement</li>
                                <li>Impromptu speaking exercises</li>
                                <li>Debate techniques and argument construction</li>
                                <li>Body language and courtroom presence</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Competition Opportunities</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Inter-college elocution competitions</li>
                                <li>National level debate championships</li>
                                <li>Mock parliament sessions</li>
                                <li>Legal symposium presentations</li>
                                <li>Client counseling competitions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Skill Development Focus Areas</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded shadow">
                                <h4 className="font-semibold text-purple-600 mb-2">Argumentative Skills</h4>
                                <p className="text-sm text-gray-600">Learn to construct compelling legal arguments and counter-arguments effectively.</p>
                            </div>
                            <div className="bg-white p-4 rounded shadow">
                                <h4 className="font-semibold text-purple-600 mb-2">Persuasive Speaking</h4>
                                <p className="text-sm text-gray-600">Master the art of persuasion through structured speech and rhetoric.</p>
                            </div>
                            <div className="bg-white p-4 rounded shadow">
                                <h4 className="font-semibold text-purple-600 mb-2">Critical Analysis</h4>
                                <p className="text-sm text-gray-600">Develop quick thinking and analytical skills for impromptu responses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Practice Opportunities</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li><span className="font-semibold">Weekly Sessions:</span> Regular practice sessions with peer feedback</li>
                                <li><span className="font-semibold">Expert Guidance:</span> Sessions conducted by experienced lawyers and public speaking coaches</li>
                                <li><span className="font-semibold">Recording Facility:</span> Video recording for self-assessment and improvement</li>
                                <li><span className="font-semibold">Mock Presentations:</span> Simulated court scenarios and client meetings</li>
                            </ul>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="bg-gray-50 py-8 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-6 text-center">Student Testimonials</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <span className="text-purple-600 font-semibold">RK</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-purple-600">Rahul Kumar</div>
                                        <div className="text-sm text-gray-600">5th Year Student</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "The public speaking program helped me overcome my stage fear. Now I confidently participate in national-level competitions."
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <span className="text-purple-600 font-semibold">AP</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-purple-600">Ananya Patel</div>
                                        <div className="text-sm text-gray-600">4th Year Student</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "Regular practice sessions and expert feedback significantly improved my courtroom presentation skills."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-semibold text-purple-600 mb-4">Learning Materials</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Speech Writing Guide
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>

                                    Voice Modulation Tips
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-semibold text-purple-600 mb-4">Practice Tools</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Recording Studio Access
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Feedback Software
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-semibold text-purple-600 mb-4">Online Resources</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    </svg>
                                    Video Tutorials
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    </svg>
                                    Practice Exercises
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8 bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-lg text-white">
                        <p className="font-semibold text-xl mb-3">Join Our Speaking Club</p>
                        <p className="mb-4">
                            Participate in our weekly speaking club sessions to practice and improve your skills.
                            Open to all students. Sessions held every Wednesday at 4 PM in the Moot Court Hall.
                        </p>
                        <div className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                            Register for Next Session
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElocutionPublicSpeaking