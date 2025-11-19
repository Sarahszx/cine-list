export default function FilmPage({ params }: { params: { id: string } }) {
  return (
    <div>
      Filme selecionado: {params.id}
    </div>
  );
}

