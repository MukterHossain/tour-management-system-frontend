import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useAddTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";

export function AddDivisionModal() {
  const form = useForm({
    defaultValues: {
        name: "",
        description: "",
    }
  });
//   const [addTourType] = useAddTourTypeMutation();

  const onSubmit = async (data) => {
    console.log(data)
    // const res = await addTourType({ name: data.name }).unwrap();
    // if (res.success) {
    //   toast.success("Tour Type Added");
    // }
  };

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button>Add Division</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Division</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form id="add-division" className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Division Type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tour Type Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Division Description</FormLabel>
                    <FormControl>
                        <Textarea {...field}/>
                      
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="add-division">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  );
}