'use server';

export async function createInvoice(formData: FormData) {
  console.log('Creating invoice...', formData);
    // If you're working with forms that have many fields, you may want to consider using the `FormData.entries()` method to convert the form data to a key/value object.
    // const rawFormData = Object.fromEntries(formData.entries());
    
    // Alternatively, you can use the `FormData.get()` method to get the value of a specific field.
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };
    console.log('Raw form data:', rawFormData);
    console.log(typeof rawFormData.amount);
}
