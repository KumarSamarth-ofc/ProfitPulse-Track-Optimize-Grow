import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";

export default async function AddTransactionPage({ params, searchParams }) {
  const accounts = await getUserAccounts();

  // ✅ Correct way to access query params in Next.js App Router
  // const editId = searchParams?.id || null;

  // let initialData = null;
  // if (editId) {
  //   initialData = await getTransaction(editId);
  // }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">
          {/* {editId ? "Edit" : "Add"} Transaction */}
          Add Transaction
        </h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        // editMode={!!editId}
        // initialData={initialData}
      />
    </div>
  );
}
