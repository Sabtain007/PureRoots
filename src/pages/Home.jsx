import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Leaf, Truck, MapPin, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 p-6">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-green-700">PureRoots</h1>
        <p className="mt-4 text-xl">Organic & Fresh from Farm to Your Doorstep</p>
        <p className="text-md text-gray-600">Located in Multan, Pakistan</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Leaf className="text-green-600 w-10 h-10 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Products</h2>
            <p>We offer premium quality wheat grains, mangoes, rice, dairy, and more — all organic and directly from our farm.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Truck className="text-green-600 w-10 h-10 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Fast Delivery</h2>
            <p>Quick deliveries in Multan and nearby regions through trusted logistic partners.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <MapPin className="text-green-600 w-10 h-10 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
            <p>Visit our farm in Multan to experience sustainable and transparent organic farming.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <BookOpen className="text-green-600 w-10 h-10 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>Check out our blog and resources to learn more about organic agriculture and healthy living.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-10">
        <p className="text-sm text-gray-600 mb-2">© 2025 PureRoots. All rights reserved.</p>
        <Button variant="outline" className="flex items-center gap-2 mx-auto">
          <Phone className="w-4 h-4" /> Contact Us
        </Button>
      </footer>
    </div>
  );
}