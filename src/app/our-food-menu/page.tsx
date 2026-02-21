import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Food Menu',
    description: 'Explore our handcrafted food menu, featuring elevated plates and supper club specials at East Troy Brewery.',
};
import MenuTabs from '@/components/MenuTabs';

export default function FoodMenu() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-20 px-4 text-center border-b-8 border-etbrew-gold">
                <h1 className="text-5xl font-serif uppercase tracking-wider">Menus</h1>
            </section>

            {/* Menu Content */}
            <section className="py-20 px-4 max-w-5xl mx-auto w-full">
                <div className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-etbrew-gold">
                    <MenuTabs />

                    {/* Snacks */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 uppercase tracking-wide border-b border-stone-200 pb-6">Snacks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Hill Valley Cheese Curds</h3>
                                <span className="text-etbrew-gold font-bold">14.5</span>
                            </div>
                            <p className="text-stone-600">Hand battered, served with ranch dressing (Vegetarian Friendly).</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Crispy Brussel Sprouts</h3>
                                <span className="text-etbrew-gold font-bold">13</span>
                            </div>
                            <p className="text-stone-600">Glazed in a honey garlic sauce, topped w/ shaved parmesan, and microgreens. Served with truffle aioli.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">BBQ Pork Nachos</h3>
                                <span className="text-etbrew-gold font-bold">14</span>
                            </div>
                            <p className="text-stone-600">Queso, pico de gallo, black bean corn salsa, jalapeño, guacamole, BBQ sauce, cotija cheese, pulled pork, and cilantro.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Parmesan Crusted Pretzel</h3>
                                <span className="text-etbrew-gold font-bold">11</span>
                            </div>
                            <p className="text-stone-600">Bavarian style pretzel with garlic butter & parmesan. Served with our house queso and beer mustard.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Hummus & Pita</h3>
                                <span className="text-etbrew-gold font-bold">13.5</span>
                            </div>
                            <p className="text-stone-600">House-made hummus, served with pita chips, cotija, & garlic confit oil.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Loaded Queso</h3>
                                <span className="text-etbrew-gold font-bold">10</span>
                            </div>
                            <p className="text-stone-600">Queso topped with pico de gallo and guacamole. Served with salsa and tortilla chips (Vegetarian Friendly).</p>
                        </div>
                    </div>

                    {/* Salads */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Salads</h2>
                    <p className="text-center text-stone-500 mb-8 italic">ADD CHICKEN TO ANY SALAD (+$4)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Southwest Cobb Salad</h3>
                                <span className="text-etbrew-gold font-bold">16</span>
                            </div>
                            <p className="text-stone-600">Romaine lettuce, tomatoes, roasted corn, black beans, red onion, avocado, tortilla strips, cotija cheese, cilantro lime dressing & chili sriracha ranch drizzle.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Caesar Salad</h3>
                                <span className="text-etbrew-gold font-bold">14</span>
                            </div>
                            <p className="text-stone-600">Romaine lettuce, house made lemony caesar dressing, crouton crumbles, shaved parmesan cheese, oregano.</p>
                        </div>
                    </div>

                    {/* Friday Fish Fry */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Friday Fish Fry</h2>
                    <p className="text-center text-stone-500 mb-8 italic">LIMITED QUANTITIES AVAILABLE</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Perch Fry</h3>
                                <span className="text-etbrew-gold font-bold">20</span>
                            </div>
                            <p className="text-stone-600">Lake Erie Perch - Choice of Baked or Fried Flour Battered.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Beer Battered Cod</h3>
                                <span className="text-etbrew-gold font-bold">17</span>
                            </div>
                            <p className="text-stone-600"></p>
                        </div>
                    </div>

                    {/* BBQ Plates */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">BBQ Plates</h2>
                    <p className="text-center text-stone-500 mb-8 italic">ALL PLATES INCLUDE MAC & CHEESE, COLESLAW, FRENCH FRIES, AND CORNBREAD. NO SUBSTITUTIONS PLEASE.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">1/2 Pound Brisket</h3>
                                <span className="text-etbrew-gold font-bold">18</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Full Pound Brisket</h3>
                                <span className="text-etbrew-gold font-bold">28</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">1/2 Pound Pulled Pork</h3>
                                <span className="text-etbrew-gold font-bold">15</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Full Pound Pulled Pork</h3>
                                <span className="text-etbrew-gold font-bold">23</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Combo Platter</h3>
                                <span className="text-etbrew-gold font-bold">26</span>
                            </div>
                            <p className="text-stone-600">1/2 Brisket / 1/2 Pulled Pork.</p>
                        </div>
                    </div>

                    {/* ET Square Pizzas */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">ET Square Pizzas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">White Truffle Pear</h3>
                                <span className="text-etbrew-gold font-bold">17</span>
                            </div>
                            <p className="text-stone-600">Garlic parmesan white sauce, fresh mozzarella, anjou pears, arugula, white truffle oil & balsamic glaze.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Prosciutto Diavolo</h3>
                                <span className="text-etbrew-gold font-bold">17</span>
                            </div>
                            <p className="text-stone-600">Spicy fra Diavolo sauce, burrata cheese, prosciutto, garnished w/ arugula & garlic confit oil.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Vodka A La Sausage</h3>
                                <span className="text-etbrew-gold font-bold">18</span>
                            </div>
                            <p className="text-stone-600">Vodka sauce, mozzarella, house-made local Italian sausage.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Say Cheese</h3>
                                <span className="text-etbrew-gold font-bold">15</span>
                            </div>
                            <p className="text-stone-600">Roasted tomato sauce, mozzarella, cheddar, parmesan.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">BYO Pizza</h3>
                                <span className="text-etbrew-gold font-bold">18</span>
                            </div>
                            <p className="text-stone-600">Say Cheese Base Max 3 toppings; Pepperoni, Italian Sausage, Prosciutto, Bacon, Red Onion, Tomatoes, Jalapeños.</p>
                        </div>
                    </div>

                    {/* Wings */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Wings</h2>
                    <p className="text-center text-stone-500 mb-8 italic">NOT AVAILABLE FRIDAY DUE TO FISH FRY. Flavors: Bourbon BBQ, House Buffalo (HOT), Caribbean Jerk Dry Rub, Zess Pepper Ranch (HOT).</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Half Dozen</h3>
                                <span className="text-etbrew-gold font-bold">$9</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Dozen</h3>
                                <span className="text-etbrew-gold font-bold">$16</span>
                            </div>
                        </div>
                    </div>

                    {/* Sammies */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Sammies</h2>
                    <p className="text-center text-stone-500 mb-8 italic">GLUTEN-FREE BUNS ARE AVAILABLE FOR $1 EXTRA; SWAP TATER TOTS FOR +$1 OR SIDE SALAD +$2</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">3 Meat Combo</h3>
                                <span className="text-etbrew-gold font-bold">$22/person</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Bacon & Blue</h3>
                                <span className="text-etbrew-gold font-bold">18</span>
                            </div>
                            <p className="text-stone-600">1/2 lb. Brisket Patty, bacon jam, apple slaw, arugula, blue cheese.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Classic Chicken Sammie</h3>
                                <span className="text-etbrew-gold font-bold">15</span>
                            </div>
                            <p className="text-stone-600">Crispy or Grilled chicken, your choice of wing sauce, lettuce, tomato, Brioche Bun.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">2 Meat Combo</h3>
                                <span className="text-etbrew-gold font-bold">$20/person</span>
                            </div>
                        </div>
                    </div>

                    {/* Mac N Cheese */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Mac N Cheese</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Mac N Cheese</h3>
                                <span className="text-etbrew-gold font-bold">14</span>
                            </div>
                            <p className="text-stone-600">Mac n&apos; cheese with a southwest cream sauce made in house.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">BBQ Mac N Cheese</h3>
                                <span className="text-etbrew-gold font-bold">18</span>
                            </div>
                            <p className="text-stone-600">Our famous mac topped with your choice of pork or chicken, house made BBQ sauce, shredded cheese, and green onions (+ Upgrade to brisket +$1).</p>
                        </div>
                    </div>

                    {/* Kids Menu */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Kids Menu</h2>
                    <p className="text-center text-stone-500 mb-8 italic">AVAILABLE FOR GUESTS 12 YEARS OLD AND YOUNGER</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Cheese Pizza</h3>
                                <span className="text-etbrew-gold font-bold">8</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Kid&apos;s Cheeseburger & Fries</h3>
                                <span className="text-etbrew-gold font-bold">9</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Grilled Cheese & Fries</h3>
                                <span className="text-etbrew-gold font-bold">7</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Mac N&apos; Cheese</h3>
                                <span className="text-etbrew-gold font-bold">8</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Sides */}
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Additional Sides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Sweet Potato Tots</h3>
                                <span className="text-etbrew-gold font-bold">4</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Fries</h3>
                                <span className="text-etbrew-gold font-bold">2.50</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Side Salad</h3>
                                <span className="text-etbrew-gold font-bold">4</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">House Slaw</h3>
                                <span className="text-etbrew-gold font-bold">2.50</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Button href="https://www.toasttab.com/east-troy-brewery/v3" target="_blank" className="text-lg px-8 py-4">Order Online for Pickup</Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
