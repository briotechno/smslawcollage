import React from 'react'

const CourtExercises = () => {
    return (
        <div id="Intra-Moot-Court-Exercises" className="bg-gray-50 py-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
                    Intra Moot <span className="text-purple-600"> Court Exercises:
                    </span>
                </h1>
                <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                <div className="space-y-8">
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Our Intra Moot Court Exercises provide students with practical courtroom experience in a controlled learning environment. 
                        These exercises are designed to bridge the gap between theoretical knowledge and practical advocacy skills.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Moot Court Training</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Understanding court procedures and etiquette</li>
                                <li>Case brief preparation and analysis</li>
                                <li>Legal research and documentation</li>
                                <li>Oral advocacy techniques</li>
                                <li>Cross-examination skills development</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Practical Components</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Mock trial preparations</li>
                                <li>Written submission drafting</li>
                                <li>Court craft and advocacy</li>
                                <li>Evidence handling practice</li>
                                <li>Legal drafting exercises</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Program Objectives</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="bg-white p-4 rounded shadow">
                                <span className="font-semibold block mb-2">Career Development</span>
                                <p className="text-sm text-gray-600">Provide essential practical experience for developing legal careers and professional strategies.</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow">
                                <span className="font-semibold block mb-2">Practical Application</span>
                                <p className="text-sm text-gray-600">Apply classroom knowledge to real-world scenarios through hands-on case work.</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow">
                                <span className="font-semibold block mb-2">Legal Reality Exposure</span>
                                <p className="text-sm text-gray-600">Experience the socio-legal reality through simulated court proceedings.</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow">
                                <span className="font-semibold block mb-2">Skill Enhancement</span>
                                <p className="text-sm text-gray-600">Develop crucial advocacy and litigation skills through regular practice.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Exercise Schedule</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Preliminary Rounds: Every Monday</li>
                                <li>• Advanced Practice: Wednesday & Friday</li>
                                <li>• Mock Trials: Last Saturday of each month</li>
                                <li>• Feedback Sessions: Post each exercise</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Assessment Criteria</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Knowledge of court procedures</li>
                                <li>• Quality of legal research</li>
                                <li>• Presentation and advocacy skills</li>
                                <li>• Time management</li>
                                <li>• Professional conduct</li>
                            </ul>
                        </div>
                    </div>

                    {/* Upcoming Moot Court Sessions */}
                    <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Upcoming Moot Court Sessions</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                                <div className="text-purple-600 font-semibold mb-2">October 20, 2025</div>
                                <h4 className="font-medium mb-1">Constitutional Law</h4>
                                <p className="text-sm text-gray-600">Fundamental Rights Case Study</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                                <div className="text-purple-600 font-semibold mb-2">October 25, 2025</div>
                                <h4 className="font-medium mb-1">Criminal Law</h4>
                                <p className="text-sm text-gray-600">Mock Trial Session</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                                <div className="text-purple-600 font-semibold mb-2">October 30, 2025</div>
                                <h4 className="font-medium mb-1">Corporate Law</h4>
                                <p className="text-sm text-gray-600">Merger & Acquisition Case</p>
                            </div>
                        </div>
                    </div>

                    {/* Success Stories */}
                    <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-6">Success Stories</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">National Moot Court Champions 2024</h4>
                                    <p className="text-gray-600 text-sm">Our students won the prestigious National Law School Moot Court Competition</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">International Recognition</h4>
                                    <p className="text-gray-600 text-sm">Selected to represent India in the International Law School Mooting Championship</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Digital Resources</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Court Procedure Guidelines
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Sample Memorial Templates
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Case Law Database
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-xl font-semibold text-purple-600 mb-4">Video Library</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Past Moot Court Finals
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Expert Commentary Sessions
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Training Tutorials
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8 bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-lg text-white">
                        <p className="font-semibold text-xl mb-3">Ready to Participate?</p>
                        <p className="mb-4">
                            All students are required to participate in at least two moot court exercises per semester. 
                            Register now to secure your spot in upcoming sessions.
                        </p>
                        <div className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                            Visit Moot Court Committee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourtExercises