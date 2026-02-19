import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface BookingFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  programName: string;
}

export default function BookingFormModal({ open, onOpenChange, programName }: BookingFormModalProps) {
  const [studentName, setStudentName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentNumber, setParentNumber] = useState('');
  const [email, setEmail] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [open]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentNumber.trim()) {
      toast({ title: 'Please enter your WhatsApp number', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-booking', {
        body: { studentName, ageGroup, parentName, parentNumber, email, programName },
      });

      if (error) throw error;

      toast({ title: '🎉 Seat Booked!', description: `We'll reach out on WhatsApp for ${programName}.` });
      setStudentName('');
      setAgeGroup('');
      setParentName('');
      setParentNumber('');
      setEmail('');
      onOpenChange(false);
    } catch (err) {
      console.error('Booking form error:', err);
      toast({ title: 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-[90vw] lg:max-w-[520px] max-h-[90vh] rounded-[22px] border-deep-wine/20 bg-[hsl(348,40%,97%)] p-0 overflow-hidden flex flex-col">
        <div className="p-5 sm:p-6 md:p-8 overflow-y-auto flex-1">
          <DialogHeader className="mb-4 sm:mb-5">
            <div className="flex justify-center mb-3">
              <Badge className="bg-deep-wine/10 text-deep-wine border-0 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium">
                Booking for: {programName} Program
              </Badge>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-deep-wine text-center">
              Book a Seat
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-sm">
              Fill in the details below and we'll confirm your spot.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="studentName" className="text-deep-wine font-medium text-sm">Student Name</Label>
              <Input
                ref={firstInputRef}
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student's name"
                className="bg-white border-border focus-visible:ring-accent focus-visible:border-accent rounded-xl h-10 sm:h-11 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="ageGroup" className="text-deep-wine font-medium text-sm">Age Group</Label>
              <Select value={ageGroup} onValueChange={setAgeGroup}>
                <SelectTrigger id="ageGroup" className="bg-white border-border focus:ring-accent rounded-xl h-10 sm:h-11 text-sm">
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent className="bg-white z-[100]">
                  <SelectItem value="6-8">6–8 years</SelectItem>
                  <SelectItem value="9-14">9–14 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="parentName" className="text-deep-wine font-medium text-sm">Parent Name</Label>
              <Input
                id="parentName"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Enter parent's name"
                className="bg-white border-border focus-visible:ring-accent focus-visible:border-accent rounded-xl h-10 sm:h-11 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="parentNumber" className="text-deep-wine font-medium text-sm">
                Parent Number (WhatsApp) <span className="text-accent">*</span>
              </Label>
              <Input
                id="parentNumber"
                type="tel"
                value={parentNumber}
                onChange={(e) => setParentNumber(e.target.value)}
                placeholder="Enter WhatsApp number"
                required
                className="bg-white border-border focus-visible:ring-accent focus-visible:border-accent rounded-xl h-10 sm:h-11 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-deep-wine font-medium text-sm">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="bg-white border-border focus-visible:ring-accent focus-visible:border-accent rounded-xl h-10 sm:h-11 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-deep-wine font-medium text-sm">Selected Program</Label>
              <Input
                value={programName}
                readOnly
                className="bg-deep-wine/5 border-deep-wine/15 text-deep-wine font-medium rounded-xl h-10 sm:h-11 cursor-default text-sm"
              />
            </div>

            <div className="pt-1 sm:pt-2 sticky bottom-0 bg-[hsl(348,40%,97%)]">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-deep-wine hover:bg-deep-wine/85 text-white text-base sm:text-lg font-bold rounded-xl h-11 sm:h-12 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                {isSubmitting ? 'Booking...' : 'Book My Seat'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
