using System.ComponentModel.DataAnnotations;

namespace server.Models.Entities
{
    public class Fruit : BaseEntity
    {
        [Required]
        public string Name { get; set; }

        [Required(ErrorMessage = "All fruit deserve notes!")]
        public string Notes { get; set; }

        [Required]
        public int Calories { get; set; }

        [Required]
        public bool Rotten { get; set; }
    }
}