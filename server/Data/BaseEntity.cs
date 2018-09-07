﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace server.Data
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
    }
}