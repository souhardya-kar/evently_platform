import * as z from 'zod'

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be atleast 3 charecters'),
    description: z.string().min(3, 'Description must be atleast 3 charecters').max(400,"Description must be less than 400 charecters"),
    location: z.string().min(3, 'Location must be atleast 3 charecters').max(400,"Location must be less than 400 charecters"),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
})