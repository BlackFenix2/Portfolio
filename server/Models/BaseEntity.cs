using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class BaseEntity
    {
        [Key]
        [HiddenInput(DisplayValue = false)]
        public Guid Id { get; set; }
    }
}