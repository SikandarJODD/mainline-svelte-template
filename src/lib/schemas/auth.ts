import { z } from 'zod';

// Using Zod v4 email validation API
export const loginSchema = z.object({
	email: z.email('Please enter a valid email address'),
	password: z.string({ message: 'Password is required' }).min(1, 'Password is required'),
	remember: z.boolean().optional().default(false)
});

export const signupSchema = z.object({
	name: z
		.string({ message: 'Name is required' })
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name is too long'),
	email: z.email('Please enter a valid email address'),
	password: z
		.string({ message: 'Password is required' })
		.min(8, 'Password must be at least 8 characters')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[0-9]/, 'Password must contain at least one number')
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
