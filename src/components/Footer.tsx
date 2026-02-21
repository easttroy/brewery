import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 font-sans border-t-4 border-etbrew-gold">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Column 1 */}
                <div>
                    <h3 className="font-serif text-white text-xl mb-4">East Troy Brewery</h3>
                    <p className="mb-2">2905 Main St</p>
                    <p className="mb-2">East Troy, WI 53120</p>
                    <p className="mt-4"><a href="tel:2626422670" className="hover:text-etbrew-gold transition-colors">(262) 642-2670</a></p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-serif text-white text-xl mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-etbrew-gold transition-colors">Home</Link></li>
                        <li><Link href="/our-food-menu" className="hover:text-etbrew-gold transition-colors">Menus</Link></li>
                        <li><Link href="/events" className="hover:text-etbrew-gold transition-colors">Events</Link></li>
                        <li><Link href="/mug-club" className="hover:text-etbrew-gold transition-colors">Mug Club</Link></li>
                        <li><Link href="/about" className="hover:text-etbrew-gold transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-serif text-white text-xl mb-4">Hours</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <span className="text-white font-bold block mb-1">Monday</span>
                            4pm - 8pm (SUPPER CLUB)
                        </li>
                        <li>
                            <span className="text-white font-bold block mb-1">Wednesday & Thursday</span>
                            Bar: 4pm - 9pm<br />
                            Food: 4pm - 8pm
                        </li>
                        <li>
                            <span className="text-white font-bold block mb-1">Friday</span>
                            Bar: 4pm - 10pm<br />
                            Food: 4pm - 9pm
                        </li>
                        <li>
                            <span className="text-white font-bold block mb-1">Saturday</span>
                            Bar: 11:30am - 10pm<br />
                            Food: 11:30am - 9pm
                        </li>
                        <li>
                            <span className="text-white font-bold block mb-1">Sunday</span>
                            11:30am - 4pm
                        </li>
                        <li className="text-stone-500 italic">Closed Tuesdays</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center text-sm border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                <span>&copy; {new Date().getFullYear()} East Troy Brewery. All rights reserved.</span>
                <span className="hidden sm:inline text-stone-600">|</span>
                <div className="flex gap-4">
                    <Link href="/terms-and-conditions" className="hover:text-etbrew-gold transition-colors">Terms &amp; Conditions</Link>
                    <Link href="/privacy-policy" className="hover:text-etbrew-gold transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
