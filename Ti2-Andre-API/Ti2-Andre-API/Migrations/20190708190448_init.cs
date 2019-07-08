using Microsoft.EntityFrameworkCore.Migrations;

namespace Ti2_Andre_API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Editoras",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: false),
                    Logo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Editoras", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pessoas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: false),
                    Foto = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pessoas", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Series",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: true),
                    Genero = table.Column<string>(nullable: true),
                    Foto = table.Column<string>(nullable: true),
                    Sinopse = table.Column<string>(nullable: true),
                    Video = table.Column<string>(nullable: true),
                    AuxClassificacao = table.Column<string>(nullable: true),
                    Classificacao = table.Column<double>(nullable: false),
                    EditoraFK = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Series", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Series_Editoras_EditoraFK",
                        column: x => x.EditoraFK,
                        principalTable: "Editoras",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Temporadas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Numero = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    Foto = table.Column<string>(nullable: true),
                    Trailer = table.Column<string>(nullable: true),
                    SerieFK = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Temporadas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Temporadas_Series_SerieFK",
                        column: x => x.SerieFK,
                        principalTable: "Series",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Episodios",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Numero = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    Sinopse = table.Column<string>(nullable: true),
                    Foto = table.Column<string>(nullable: true),
                    Trailer = table.Column<string>(nullable: true),
                    Classificacao = table.Column<double>(nullable: false),
                    TemporadaFK = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Episodios", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Episodios_Temporadas_TemporadaFK",
                        column: x => x.TemporadaFK,
                        principalTable: "Temporadas",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comentarios",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Texto = table.Column<string>(nullable: true),
                    EpisodioFK = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comentarios", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Comentarios_Episodios_EpisodioFK",
                        column: x => x.EpisodioFK,
                        principalTable: "Episodios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comentarios_EpisodioFK",
                table: "Comentarios",
                column: "EpisodioFK");

            migrationBuilder.CreateIndex(
                name: "IX_Episodios_TemporadaFK",
                table: "Episodios",
                column: "TemporadaFK");

            migrationBuilder.CreateIndex(
                name: "IX_Series_EditoraFK",
                table: "Series",
                column: "EditoraFK");

            migrationBuilder.CreateIndex(
                name: "IX_Temporadas_SerieFK",
                table: "Temporadas",
                column: "SerieFK");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comentarios");

            migrationBuilder.DropTable(
                name: "Pessoas");

            migrationBuilder.DropTable(
                name: "Episodios");

            migrationBuilder.DropTable(
                name: "Temporadas");

            migrationBuilder.DropTable(
                name: "Series");

            migrationBuilder.DropTable(
                name: "Editoras");
        }
    }
}
