'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
} from '@/components/ui/table';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';


interface Category {
  id: number;
  name: string;
  image_url?: string;
  description?: string;
}

interface CategoryTableProps {
  categories: Category[];
  onDelete?: (id: number) => void; // устгах callback
  onEdit: (cat: Category) => void; // edit товчоо callback
}

const CategoryTable = ({ categories, onDelete, onEdit }: CategoryTableProps) => {
  // const [category, setCategories] = useState<Category[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div >

      <Table>
        <TableCaption> Мэдээлэл</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Категори</TableHead>
            <TableHead>Тайлбар</TableHead>
            <TableHead >Зураг</TableHead>
            <TableHead>Үйлдэл</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat) => (
            <TableRow key={cat.id}>
              <TableCell>{cat.name}</TableCell>
              <TableCell>
                {cat.description}
              </TableCell>
              <TableCell>
                <td className="border px-4 py-2">
                  {cat.image_url && (
                    <img
                      src={`http://localhost:4000${cat.image_url}`}
                      alt={cat.name}
                      width={50}
                      height={50}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setSelectedImage(`http://localhost:4000${cat.image_url}`)
                      }
                    />
                  )}
                </td>
                {/* {cat.image_url} */}
              </TableCell>
              <TableCell>
                <div className='flex justify'><div>
                  <button className="bg-orange-200 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded text-xs"
                    onClick={() => onEdit(cat)}
                  >
                    {<Pencil className='text-slate-800' size={20} />}
                  </button>
                </div>
                  <div className='ml-5'>
                    <button
                      className="bg-red-200 hover:bg-red-500 text-white font-bold py-2 px-4 rounded text-xs"
                      onClick={() => onDelete ? onDelete(cat.id) : null}
                    >
                      <Trash className='text-slate-800' size={20} />
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Category"
            style={{ maxHeight: "80%", maxWidth: "80%" }}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryTable;