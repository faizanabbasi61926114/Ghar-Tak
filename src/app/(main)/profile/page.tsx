import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Edit3, MapPin, ShoppingBag, Settings } from 'lucide-react';

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "profile person",
    location: "123 Main St, Anytown, USA",
    memberSince: "January 2023",
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="flex items-center space-x-4">
        <User className="h-10 w-10 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Your Profile</h1>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-4 bg-muted/30 p-6">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.dataAiHint} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-headline">{user.name}</CardTitle>
            <CardDescription className="text-md">{user.email}</CardDescription>
            <p className="text-xs text-muted-foreground mt-1">Member since: {user.memberSince}</p>
          </div>
          <Button variant="outline" size="icon" className="ml-auto">
            <Edit3 className="h-4 w-4" />
            <span className="sr-only">Edit Profile</span>
          </Button>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 font-headline">Personal Information</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue={user.email} />
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-semibold mb-2 font-headline">Address & Location</h3>
             <div className="flex items-center text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Current default address: {user.location}</span>
            </div>
            <Button variant="outline">
              <Edit3 className="h-4 w-4 mr-2" /> Update Address
            </Button>
          </div>
           <Separator />
          <div>
            <h3 className="text-lg font-semibold mb-2 font-headline">Account Settings</h3>
            <div className="space-y-3">
                 <Button variant="link" className="p-0 h-auto text-primary">Change Password</Button><br/>
                 <Button variant="link" className="p-0 h-auto text-primary">Notification Preferences</Button><br/>
                 <Button variant="destructive" className="mt-4">Delete Account</Button>
            </div>
          </div>
        </CardContent>
      </Card>
       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center font-headline">
            <ShoppingBag className="h-5 w-5 mr-2 text-primary" /> Order History
          </CardTitle>
          <CardDescription>View your past orders and bookings.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your order history will appear here.</p>
          {/* Placeholder for order list */}
          <Button variant="outline" className="mt-4">View All Orders</Button>
        </CardContent>
      </Card>
    </div>
  );
}
