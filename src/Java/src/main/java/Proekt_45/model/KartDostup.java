package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: КартДоступ
 */
@Entity(name = "IISProekt_45КартДоступ")
@Table(schema = "public", name = "КартДоступ")
public class KartDostup {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravSotr")
    @Convert("SpravSotr")
    @Column(name = "СправСотр", length = 16, unique = true, nullable = false)
    private UUID _spravsotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravSotr", insertable = false, updatable = false)
    private SpravSotr spravsotr;

    @OneToMany(mappedBy = "kartdostup", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<BazaDannyx> bazadannyxs;


    public KartDostup() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}